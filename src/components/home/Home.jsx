import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import giphy from "../images/Group86.png";
import vector from "../images/Group68.png";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PoleCard from "../card/PoleCard";

function Home() {
  return (
    <>
      <Box>
        <Container>
          <Grid
            container
            spacing={3}
            sx={{ mt: { md: "80px", sm: "20px" }, p: 5 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                backgroundImage: `url(${giphy})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                "@media (max-width: 900px)": {
                  height: "560px",
                },
              }}
            >
              <Box
                sx={{
                  width: "300px",
                  height: "80px",
                  position: "absolute",
                  left: "0",
                  right: " 0",
                  bottom: " 0.6rem",
                  margin: "0 auto",
                  display: "flex",
                  gap: "10px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "73px",
                }}
              >
                <Box
                  sx={{
                    width: "120px",
                    height: "80px",
                    backgroundImage: `url(${vector})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "contain",
                  }}
                />{" "}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: " #FFFFFF",
                      // width: "80%",
                    }}
                  >
                    Steave Shulzc
                    <br />
                    Here is the place for a short quote from the ceo director
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "800",
                    fontSize: "53px",
                    lineHeight: "100px",
                    textAlign: "center",
                    letterSpacing: "0.04em",
                  }}
                >
                  Cardence
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "32px",
                    opacity: "0.6",
                  }}
                >
                  We decentralize project fundraising. Get early access to the
                  most promising Blockchain Projects. We are in Love with
                  GameFi, NFTs, Metaverse and Everything Cardano.
                </Typography>

                <Grid container alignItems="center" justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        my: 3,
                        backgroundImage:
                          "linear-gradient(229.53deg, #D90EE8 2.72%, #1B7DAB 130.73%)",
                        boxShadow:
                          "0px 1px 0px #4D58C1, 0px 6px 8px rgba(0, 0, 0, 0.19), -11px 12px 33px rgba(7, 163, 223, 0.15), 0px 15px 24px 8px rgba(171, 4, 132, 0.22)",
                        borderRadius: "12px",
                        width: "220px",
                        height: "60px",
                      }}
                    >
                      Stake
                    </Button>
                  </Grid>
                  <Grid item xs />
                  <Grid item>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          fontFamily: "Montserrat",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                      >
                        Join us
                      </Typography>
                      <Box sx={{ mx: 2 }} />
                      <TwitterIcon />
                      <Box sx={{ mx: 1 }} />
                      <TelegramIcon />
                      <Box sx={{ mx: 1 }} />
                      <FacebookIcon />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6} md={4}>
                    <Box
                      sx={{
                        width: "140px",
                        height: "40px",
                        backgroundImage: `url(${image1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      {/* Your content here */}
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Box
                      sx={{
                        width: "130px",
                        height: "55px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${image2})`,
                      }}
                    >
                      {/* Your content here */}
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Box
                      sx={{
                        width: "130px",
                        height: "55px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${image3})`,
                      }}
                    >
                      {/* Your content here */}
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Box
                      sx={{
                        width: "130px",
                        height: "55px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${image2})`,
                      }}
                    >
                      {/* Your content here */}
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Box
                      sx={{
                        width: "130px",
                        height: "55px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",

                        backgroundImage: `url(${image5})`,
                      }}
                    >
                      {/* Your content here */}
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Box
                      sx={{
                        width: "132px",
                        height: "55px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${image6})`,
                      }}
                    >
                      {/* Your content here */}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <PoleCard />
      </Box>
    </>
  );
}

export default Home;
