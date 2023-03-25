import { Stack, Typography } from "@mui/material";
import "../Styles/About.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import Navbar from "../Components/NavBar/NavBar"
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import about from '../Images/about.jpeg';
import FootBar from "../Components/NavBar/FootBar";





export default function About() {



    // Icon links to my linkdin, whatsapp, github accounts
    const linkdin = () => {
        window.open("https://www.linkedin.com/in/anish-kumar-thakur-478001185")
    }
    const whatsapp = () => {
        window.open('https://wa.me/917992470122')
    }
    const Email = () => {
        window.open("mailto:ak804670@gmail.com");
    }
    const gitHub = () => {
        window.open("https://github.com/ak804670")
    }

    return (
        <>
            <Navbar active={""} />
            <h2 className="title">ABOUT</h2>
            <Stack className="stack"
                p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>

                <Stack
                    className="midContainer"
                    direction={{
                        xs: "column-reverse",
                        sm: "column-reverse",
                        md: "column-reverse",
                        lg: "row",
                    }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    mt="20px">
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "13px",
                                sm: "15px",
                                md: "17px",
                                lg: "19px",
                            },
                            paddingRight: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },
                            paddingLeft: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },

                            textAlign: "justify"
                        }}>
                        A resume builder app is a software application that allows users to easily create, edit, and share professional resumes. These apps typically include a wide range of customizable templates, pre-written phrases and prompts, and tools for formatting, editing, and sharing resumes. <br />
                        Some resume builder apps also include features such as the ability to import existing resumes, the ability to save resumes in multiple formats, and the ability to share resumes directly with potential employers. <br />
                        Overall, a resume builder app can help users save time and effort when creating a resume, and can also help them create a more polished and professional-looking document.

                    </Typography>
                    <Stack sx={{ width: 500, height: 400 }} >
                        <img
                            src={about}
                            alt="About_Image"
                        />
                    </Stack>
                </Stack>
                <Box mt="25px">
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "22px",
                                sm: "25px",
                                md: "27px",
                                lg: "30px",
                            },
                            fontWeight: "400",
                            color: "dark",
                        }}>
                        Connect with us-
                    </Typography>
                    <Box className="icons">
                        <LinkedInIcon
                            style={{ cursor: "pointer" }}
                            onClick={linkdin}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            color="primary"
                        />
                        <GithubIcon
                            onClick={gitHub}
                            style={{ cursor: "pointer" }}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            color="black"
                        />
                        <WhatsAppIcon
                            style={{ cursor: "pointer" }}
                            onClick={whatsapp}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            color="success"
                        />
                        <EmailIcon
                            style={{ cursor: "pointer" }}
                            onClick={Email}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            color="error"
                        />

                    </Box>
                </Box>
            </Stack>
            <FootBar />
        </>
    );
}