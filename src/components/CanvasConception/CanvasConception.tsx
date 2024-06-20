/* eslint-disable tailwindcss/classnames-order */
"use client";
import React, { useState } from "react";
import styles from "./CanvasConception.module.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export const CanvasComponent = () => {
  const [shape, setShape] = useState("square");
  const [width, setWidth] = useState(3);
  const [length, setLength] = useState(3);
  const [depth, setDepth] = useState(3);
  const [doubleFond, setDoubleFond] = useState(false);
  const [showEscalierOptions, setShowEscalierOptions] = useState(false);
  const [showLinerOptions, setShowLinerOptions] = useState(false);
  const [linerColor, setLinerColor] = useState("bleu");
  const [escalierType, setEscalierType] = useState("");

  const renderShape = () => {
    switch (shape) {
      case "square":
        return <boxGeometry args={[width, length, depth]} />;
      case "rectangle":
        return <boxGeometry args={[width * 1.5, length, depth]} />;
      case "round":
        return <cylinderGeometry args={[width / 2, width / 2, depth, 32]} />;
      default:
        return <boxGeometry args={[width, length, depth]} />;
    }
  };

  const handleShapeChange = (event: any) => {
    setShape(event.target.value);
  };

  const handleEscalierChange = (event: any) => {
    setShowEscalierOptions(event.target.value === "oui");
  };

  const handleLinerChange = (event: any) => {
    setShowLinerOptions(event.target.value === "oui");
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <h2>Base</h2>
        <hr />
        <div className={styles.option__child}>
          Type
          <select onChange={handleShapeChange} value={shape}>
            <option value="square">Carrée</option>
            <option value="rectangle">Rectangulaire</option>
            <option value="round">Ronde</option>
          </select>
        </div>
        <div className={styles.option__child}>
          Largeur ({width})
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className={styles.range}
          />
        </div>
        <div className={styles.option__child}>
          Longueur ({depth})
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={depth}
            onChange={(e) => setDepth(Number(e.target.value))}
            className={styles.range}
          />
        </div>
        <div className={styles.option__child}>
          Profondeur ({length})
          <input
            type="range"
            min="1"
            max="5"
            step="0.1"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className={styles.range}
          />
        </div>

        <br />
        <h2>Options</h2>
        <div className={styles.option__child}>
          Double-fond
          <div className={styles.container__radio}>
            <label>
              Oui
              <input
                type="radio"
                name="double_fond"
                value="oui"
                onChange={() => setDoubleFond(true)}
              />
            </label>
            <label>
              Non
              <input
                type="radio"
                name="double_fond"
                value="non"
                onChange={() => setDoubleFond(false)}
              />
            </label>
          </div>
        </div>

        <div className={styles.option__child}>
          Liner
          <div className={styles.flex__radio}>
            <div className={styles.container__radio}>
              <label>
                Oui
                <input
                  type="radio"
                  name="liner"
                  value="oui"
                  onChange={handleLinerChange}
                />
              </label>
              <label>
                Non
                <input
                  type="radio"
                  name="liner"
                  value="non"
                  onChange={handleLinerChange}
                />
              </label>
            </div>
            {showLinerOptions && (
              <div className={styles.option__child}>
                <select
                  onChange={(e) => setLinerColor(e.target.value)}
                  value={linerColor}
                >
                  <option value="bleu">Bleu</option>
                  <option value="turquoise">Turquoise</option>
                  <option value="blanc">Blanc</option>
                  <option value="gris">Gris</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <div className={styles.option__child}>
          Escalier
          <div className={styles.flex__radio}>
            <div className={styles.container__radio}>
              <label>
                Oui
                <input
                  type="radio"
                  name="escalier"
                  value="oui"
                  onChange={handleEscalierChange}
                />
              </label>
              <label>
                Non
                <input
                  type="radio"
                  name="escalier"
                  value="non"
                  onChange={handleEscalierChange}
                />
              </label>
            </div>
            {showEscalierOptions && (
              <div className={styles.option__child}>
                <select onChange={(e) => setEscalierType(e.target.value)}>
                  <option value="droit">Droit</option>
                  <option value="angle">Angle</option>
                  <option value="arrondi">Arrondi</option>
                  <option value="inverse">Inversé</option>
                  <option value="plage">Plage</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <span className={styles.container__grap__line}>
          <div className={styles.grap__line}></div>
        </span>
      </div>

      <Canvas className={styles.canvas}>
        <ambientLight intensity={0.7} />
        <pointLight position={[-2, 5, 1]} intensity={1} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          zoomSpeed={0.5}
          panSpeed={0.5}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />
        <PerspectiveCamera
          makeDefault
          position={[-3, 2.5, 5]}
          rotation={[0, 0, 0]}
          fov={75}
          near={1}
        />
        <mesh rotation={[0, 0, 0]}>
          {renderShape()}
          <meshStandardMaterial color={linerColor} />
        </mesh>
      </Canvas>
    </div>
  );
};
