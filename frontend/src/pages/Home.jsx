import React, { useState, useMemo, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Typography, Grid, Box } from "@mui/material";
import imageSrc from "../assets/pic1.jpg";

import MultipleSelect from "../components/MultipleSelect";
import Table from "../components/Table";
import './Home.css'

import StepContext from "../share/StepContext";

function Home() {
  const [steps, setSteps] = useState('');
  const [step, setStep] = useState([]);
  const [waste, setWaste] = useState('')

  useEffect(() => {
    setStep(steps.split('\n'));
  }, [steps]);

  console.log(step);

  const stepContextValue = useMemo(() => {
    return {
      steps,
      setSteps,
      setWaste
    };
  }, [steps]);

  return (
    <StepContext.Provider value={stepContextValue}>
      <Box>
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
          }}
        >
          <Navbar />
          <Box
            sx={{
              position: "relative",
              marginTop: "40vh",
              color: "white",
              px: 2,
            }}
          >
            <Typography variant="h2" component="div" className="Hometext title header">
              Join Us in Creating a Greener Future!
            </Typography>
            <Typography variant="body1" component="div" className="Hometext header">
              Welcome to our website dedicated to waste separation and environmental consciousness. We invite you to become an active participant in building a sustainable future by practicing waste separation in your daily life.
            </Typography>
            <Box sx={{ marginTop: "10px" }}>
              <MultipleSelect />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            p: 2,
            color: "white",
            backgroundColor: "#8FBDD3",
            margin: "30px",
            borderRadius: "20px",
            padding: "30px",
            // height: "240px",
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          <Typography variant="h4" component="div" className="Hometext title">
            How to separate this waste?
          </Typography>

          <div class="stepDisplay">
            <Box id="left-side" sx={{ width: "49%", borderRight: "1px solid white", paddingRight: "10px" }}>
              {step.length > 1 ? (
                <div class="prepStep">
                  {step.slice(0, Math.ceil(step.length / 2)).map((eachStep, index) => (
                    <ol key={eachStep}>
                      <li>{index + 1}. {eachStep}</li>
                    </ol>
                  ))}
                </div>
              ) : (
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.2em" }}>Please select waste types</Typography>
              )}
            </Box>
            <Box id="right-side" sx={{ width: "49%", paddingLeft: "10px" }}>
              {step.length > 0 && (
                <div class="prepStep">
                  {step.slice(Math.ceil(step.length / 2)).map((eachStep, index) => (
                    <ol key={eachStep}>
                      <li>{index + 1 + Math.ceil(step.length / 2)}. {eachStep}</li>
                    </ol>
                  ))}
                </div>
              )}
            </Box>
          </div>
        </Box>
        <Box sx={{ margin: "30px" }}>
          <Table />
        </Box>
      </Box>
    </StepContext.Provider >
  );
}

export default Home;
