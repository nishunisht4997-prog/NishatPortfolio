import { useEffect, useRef, memo } from 'react';
import * as THREE from 'three';

const ThreeBackground = memo(() => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 28);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ==========================================
    // 1. Sleek 3D Undulating Particle Grid (Wave Floor)
    // ==========================================
    const gridCols = isMobile ? 32 : 55;
    const gridRows = isMobile ? 24 : 40;
    const spacing = 1.4;
    const totalWaveParticles = gridCols * gridRows;

    const waveGeometry = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(totalWaveParticles * 3);
    const waveColors = new Float32Array(totalWaveParticles * 3);

    const colorCyan = new THREE.Color(0x06b6d4);
    const colorEmerald = new THREE.Color(0x10b981);
    const colorIndigo = new THREE.Color(0x6366f1);

    let idx = 0;
    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const x = (i - gridCols / 2) * spacing;
        const z = (j - gridRows / 2) * spacing;
        const y = -4; // placed lower down so it never blocks central text

        wavePositions[idx * 3] = x;
        wavePositions[idx * 3 + 1] = y;
        wavePositions[idx * 3 + 2] = z;

        // Gradient coloring from center to edges
        const distFromCenter = Math.sqrt(x * x + z * z) / 35;
        const c = new THREE.Color().lerpColors(colorCyan, colorEmerald, Math.min(distFromCenter, 1));
        if (j > gridRows * 0.7) {
          c.lerp(colorIndigo, 0.4);
        }

        waveColors[idx * 3] = c.r;
        waveColors[idx * 3 + 1] = c.g;
        waveColors[idx * 3 + 2] = c.b;

        idx++;
      }
    }

    waveGeometry.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeometry.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.18 : 0.24,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    const wavePoints = new THREE.Points(waveGeometry, waveMaterial);
    scene.add(wavePoints);

    // ==========================================
    // 2. Subtle Starry Constellation Dust
    // ==========================================
    const dustCount = isMobile ? 40 : 90;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 60;
      dustPositions[i + 1] = (Math.random() - 0.5) * 35;
      dustPositions[i + 2] = (Math.random() - 0.5) * 30;
    }

    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));

    const dustMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.16,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustPoints);

    // ==========================================
    // Mouse Interactive Parallax
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0006;
      mouseY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Pause when off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Cinematic floating camera drift
      camera.position.x = Math.sin(elapsedTime * 0.25) * 1.8 + targetX * 10;
      camera.position.y = 8 + Math.cos(elapsedTime * 0.35) * 0.7 - targetY * 6;
      camera.lookAt(0, -1, 0);

      // Animate wave positions with harmonic fluid ripple
      const positions = waveGeometry.attributes.position.array;
      let pIdx = 0;
      for (let i = 0; i < gridCols; i++) {
        for (let j = 0; j < gridRows; j++) {
          const u = i * 0.22;
          const v = j * 0.22;
          // Multi-harmonic cinematic wave
          const waveHeight =
            Math.sin(u + elapsedTime * 1.1) * 1.2 +
            Math.cos(v + elapsedTime * 0.85) * 1.0 +
            Math.sin((u + v) * 0.4 + elapsedTime * 1.3) * 0.5;

          positions[pIdx * 3 + 1] = -5 + waveHeight;
          pIdx++;
        }
      }
      waveGeometry.attributes.position.needsUpdate = true;

      // Subtle tilt of wave and dust with mouse
      wavePoints.rotation.y = targetX * 0.8;
      wavePoints.rotation.x = targetY * 0.6;

      dustPoints.rotation.y = elapsedTime * 0.025 + targetX * 0.5;
      dustPoints.rotation.x = targetY * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      waveGeometry.dispose();
      waveMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, black 40%, transparent 100%)',
      }}
    />
  );
});

ThreeBackground.displayName = 'ThreeBackground';
export default ThreeBackground;
