import { format } from "prettier";
import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from "../components/paragraph";
import { WorkGridItem } from "../components/grid-item";
import thumbWebsite from '../public/images/website.jpg'
import thumbAnimation from '../public/images/animation.jpg'
import thumbSeite from '../public/images/seite.jpg'

const Social = () => {
    return (
        <Container maxWidth="100ch">
            <Heading as= "h3" size="lg" mb={5}>
                Social Media
            </Heading>
            <br></br>
            <br></br>
            <Heading as="h3" size="lg" variant="section-title">Social Media Accounts</Heading>
            <Section delay={0.3} >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                </link>
                <a href="https://twitter.com/Taany01" class="fa fa-twitter">@Taany01</a><br></br>
                <a href="https://github.com/0Taan0" class="fa fa-github">@0TAAN0</a><br></br>
                <a href="https://www.linkedin.com/in/tarkan-yildirim-3946bb223/?midToken=AQFtJb4F-qt4IQ&midSig=34kFwRJH2zO9Y1&trk=eml-email_network_conversations_01-header-72-profile&trkEmail=eml-email_network_conversations_01-header-72-profile-null-fl1b34%7Ekv2pdjwj%7E6i-null-neptune%2Fprofile%7Evanity%2Eview" class="fa fa-linkedin">@Tarkan-Yildirim</a><br></br>
                <a href="https://www.instagram.com/yildirimtarkan/?hl=de" class="fa fa-instagram">@yildirimtarkan</a><br></br>


            </Section>
            <br></br>
            <br></br>
            <br></br>
            <Heading as="h3" size="lg" variant="section-title">GitHub Projekte</Heading>
            <SimpleGrid column={[1,1,2]} gap={6}>
            <Section>
                    <WorkGridItem id="website" title="Online Portfolio" thumbnail={thumbWebsite}>
                        Diese Website
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="animation" title="ThreeJS Projekt" thumbnail={thumbAnimation}>
                        Animationen von 3D Objekten mit Three.js(Noch nicht abgeschlossen)
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="seite" title="ThreeJS Partikel Element" thumbnail={thumbSeite}>
                        Animationen von 3D Objekten mit Partikelelementen Three.js(Noch nicht abgeschlossen)
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Social