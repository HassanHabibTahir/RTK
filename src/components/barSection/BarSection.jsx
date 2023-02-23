import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import vector from "../images/chart.png";
import image7 from "../images/Group70.png";
import Group78 from "../images/Group78.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';

function BarSection() {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={1}
          sx={{
            mt: "150px",
            p: 5,
            background: "rgba(217, 217, 217, 0.05)",
          }}
        >
          <Grid item xs={12} md={4}>
            <Box
              sx={{
              
                width: "325px",
                height: "325px",
                alignItems: "center",
                margin:{ xs: "auto", sm: "auto" },
                backgroundImage: `url(${vector})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "contain",
              }}
            >
               <Divider orientation='vertical' />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
               
              }}
            >
              <Box
                sx={{
                  width: "150px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  objectFit: "contain",
                  backgroundImage: `url(${image7})`,
                }}
              >

              </Box>
             
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { xs: "1rem", sm: "1rem", md: "2rem" },
                    lineHeight: "39px",
                    textAlign: "center",
                    // width: "80%",
                  }}
                >
                  Ethereum Classic N-gage max optional Pro 300{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "150px",
                  height: "100px",
                  borderRadius: "50px",
                  alignItems: "center",
                  border: "2px solid white",
                  backgroundColor:
                    "linear-gradient(90deg, #00B1D8 5.31%, #7F0088 100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  objectFit: "contain",
                  backgroundImage: `url(${Group78})`,
                }}
              ></Box>
            </Grid>
            <Box>
              <Typography
                sx={{
                  my: 5,
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: " #FFFFFF",
                  // width: "80%",
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                my: 5,
              }}
            >
              <Button
                sx={{
                  m: 2,
                  fontFamily: "Gemunu Libre",

                  fontSize: "18px",
                  width: "195px",
                  background: "#00CE00",
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                Yes
              </Button>
              <Button
                sx={{
                  m: 2,
                  color: "#ffffff",
                  fontSize: "18px",
                  width: "195px",
                  borderRadius: "5px",
                  background: "#FF0000",
                  fontFamily: "Gemunu Libre",
                }}
              >
                No
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BarSection;
