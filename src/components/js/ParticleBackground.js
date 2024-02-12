import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import "../css/ParticleBackground.css";
import particlesOptions from "../../particles.json";

function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="particles">
            {init && <Particles options={particlesOptions}/>}
        </div>
    );
}

export default ParticleBackground;
