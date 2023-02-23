import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import image7 from "../images/image7.png";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: "#8C8C8C",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: "linear-gradient(90deg, #00B1D8 5.31%, #7F0088 100%)",
  },
}));
function PoleCard() {
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{
            textTransform: "uppercase",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "3.5rem",
            lineHeight: "32px",
            mt:'80px'
          }}
        >
          Poles
        </Typography>
        <Container>
          <Grid container spacing={3} sx={{ mt: "50px" }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Grid item xs={12} md={6} lg={4} align="center">
                <Card sx={{ minWidth: 356, borderRadius: "12px", m: 2 }}>
                  <CardContent
                    sx={{
                      display: "flex",
                    }}
                  >
                    <CardActions
                      sx={{
                        justifyContent: "space-between",
                        width: "100%",
                        gap: "5px",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50px",
                          alignItems: "center",
                          border: "2px solid white",
                          backgroundColor: "#1E1E1E",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          objectFit: "contain",
                          backgroundImage: `url(${image7})`,
                        }}
                      ></Box>
                      <Box>
                        <Button
                          sx={{
                            mr: 2,
                            fontFamily: "Gemunu Libre",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "10px",
                            lineHeight: "12px",
                            background: "#393939",
                            borderRadius: "5px",
                            color: "#8C8C8C",
                          }}
                        >
                          upcoming
                        </Button>
                        <Button
                          sx={{
                            color: "#8C8C8C",
                            fontSize: "10px",
                            fontWeight: "600",
                            lineHeight: "12px",
                            fontStyle: "normal",
                            borderRadius: "5px",
                            background: "#393939",
                            fontFamily: "Gemunu Libre",
                          }}
                        >
                          Public/private
                        </Button>
                      </Box>
                    </CardActions>
                  </CardContent>

                  <Typography
                    sx={{
                      my: 1,
                      height: "41px",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "22px",
                      fontStyle: "normal",
                      fontFamily: "Montserrat",
                    }}
                    color="text.secondary"
                  >
                    Ethereum Classic N-gage max optional Pro 300
                  </Typography>
                  <Box sx={{ p: 3 }}>
                    <BorderLinearProgress variant="determinate" value={50} />
                  </Box>
                  <CardActions sx={{ justifyContent: "space-around" }}>
                    <Button
                      size="small"
                      sx={{
                        fontFamily: "Gemunu Libre",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "17px",
                        color: " #FFFFFF",
                        my: 1,
                      }}
                    >
                      Swap Rate
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        fontFamily: "Gemunu Libre",
                        fontStyle: "normal",
                        fontWeight: "700",
                        color: " #FFFFFF",
                        fontSize: "16px",
                        lineHeight: "17px",

                        my: 1,
                      }}
                    >
                      1 ETH = 13.4 BNB
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default PoleCard;
