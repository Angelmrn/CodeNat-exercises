import { Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from '@mui/material/CardActions';
import mouseImage from "../../assets/mouse.png"; 
import monitorImage from "../../assets/monitor.png";
import keyboardImage from "../../assets/keyboard.png";
import headphonesImage from "../../assets/headset.png";
import monitor3Image from "../../assets/monitor3.png";
import Box from "@mui/material/Box";


function ProductCard(){

    return(
    <Box sx = {{display: 'flex', justifyContent: 'center'}}>
        <Box sx = {{maxWidth: '1200px', width: '100%', padding: '20px'}}>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 12, md: 12 }} >
                <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                    <Card 
                        sx={{ 
                            height: '100%',
                            transition: 'all 0.2s ease',
                            boxShadow: 1,
                                "&:hover": { 
                                    boxShadow: 3,
                                    transform: 'translateY(-3px)' 
                                }
                            }}>
                    <CardMedia
                        sx={{ height: 140 ,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center'
                        }}
                        image={mouseImage}
                        title="Endgame Gear xm1r"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Endgame Gear xm1r
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        The Endgame Gear XM1r is a lightweight, high-performance gaming mouse with a precise sensor and fast switches.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                        $56.62
                        </Typography>
                    </CardContent>
                    <CardActions sx = {{justifyContent: 'center'}}>
                        <Button size="small" sx = {{borderRadius: '20px', padding: '6px 12px', transition: 'box-shadow 0.7s ', ":hover": { boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}} >
                            Add to Cart</Button>
                    </CardActions>
                    </Card>
                </Grid>
                

                <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                    <Card 
                        sx={{ 
                            height: '100%',
                            transition: 'all 0.2s ease',
                            boxShadow: 1,
                                "&:hover": { 
                                    boxShadow: 3,
                                    transform: 'translateY(-3px)' 
                                }
                            }}>
                    <CardMedia
                        sx={{ height: 140 ,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center'
                        }}
                        image={monitorImage}
                        title="LG UltraGear"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        LG UltraGear
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        The LG UltraGear line is designed with gaming in mind: it offers high refresh rates, low response times, and adaptive sync technology.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                        $291.13 
                        </Typography>
                    </CardContent>
                    <CardActions sx = {{justifyContent: 'center'}}>
                        <Button size="small" sx = {{borderRadius: '20px', padding: '6px 12px', transition: 'box-shadow 0.7s ', ":hover": { boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}} >
                            Add to Cart</Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                    <Card 
                        sx={{ 
                            height: '100%',
                            transition: 'all 0.2s ease',
                            boxShadow: 1,
                                "&:hover": { 
                                    boxShadow: 3,
                                    transform: 'translateY(-3px)' 
                                }
                            }}>
                    <CardMedia
                        sx={{ height: 140 ,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center'
                        }}
                        image={keyboardImage}
                        title="Thunderobot k78"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Thunderobot k78
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        75% mechanical gaming keyboard featuring hotswappable Outemu switches, full RGB lighting, USBC detachable cable.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                        $27.00
                        </Typography>
                    </CardContent>
                    <CardActions sx = {{justifyContent: 'center'}}>
                        <Button size="small" sx = {{borderRadius: '20px', padding: '6px 12px', transition: 'box-shadow 0.7s ', ":hover": { boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}} >
                            Add to Cart</Button>
                    </CardActions>
                    </Card>
                </Grid>


                <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                    <Card 
                        sx={{ 
                            height: '100%',
                            transition: 'all 0.2s ease',
                            boxShadow: 1,
                                "&:hover": { 
                                    boxShadow: 3,
                                    transform: 'translateY(-3px)' 
                                }
                            }}>
                    <CardMedia
                        sx={{ height: 140 ,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center'
                        }}
                        image={headphonesImage}
                        title="Hyperx Cloud Alpha"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Hyperx Cloud Alpha
                        </Typography >
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        headset with dual-chamber 50 mm drivers, memory-foam ear cushions, a durable aluminum frame, 
                        and a detachable noise cancelling mic.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                        $70.00
                        </Typography>
                    </CardContent>
                    <CardActions sx = {{justifyContent: 'center'}}>
                        <Button size="small" sx = {{borderRadius: '20px', padding: '6px 12px', transition: 'box-shadow 0.7s ', ":hover": { boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}} >
                            Add to Cart</Button>
                    </CardActions>
                    </Card>
                </Grid>
                

                <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                    <Card 
                        sx={{ 
                            height: '100%',
                            transition: 'all 0.2s ease',
                            boxShadow: 1,
                                "&:hover": { 
                                    boxShadow: 3,
                                    transform: 'translateY(-3px)' 
                                }
                            }}>
                    <CardMedia
                        sx={{ height: 140 ,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center'
                        }}
                        image={monitor3Image}
                        title="BenQ GW2490"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        BenQ GW2490
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        monitor with a 100Hz refresh rate, 5ms response time, and Eye-Care technologies like brightness intelligence, 
                        Low Blue Light Plus, and ergonomic posture reminders for comfortable long‑term use.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                        $97.99
                        </Typography>
                    </CardContent>
                    <CardActions sx = {{justifyContent: 'center'}}>
                        <Button size="small" sx = {{borderRadius: '20px', padding: '6px 12px', transition: 'box-shadow 0.7s ', ":hover": { boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}} >
                            Add to Cart</Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                    <Card 
                        sx={{ 
                            height: '100%',
                            transition: 'all 0.2s ease',
                            boxShadow: 1,
                                "&:hover": { 
                                    boxShadow: 3,
                                    transform: 'translateY(-3px)' 
                                }
                            }}>
                    <CardMedia
                        sx={{ height: 140 ,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center'
                        }}
                        image={mouseImage}
                        title="Endgame Gear xm1r"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Endgame Gear xm1r
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        The Endgame Gear XM1r is a lightweight, high-performance gaming mouse with a precise sensor and fast switches.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                        $56.62
                        </Typography>
                    </CardContent>
                    <CardActions sx = {{justifyContent: 'center'}}>
                        <Button size="small" sx = {{borderRadius: '20px', padding: '6px 12px', transition: 'box-shadow 0.7s ', ":hover": { boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}} >
                            Add to Cart</Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </Box>
  );
}
export default ProductCard;


