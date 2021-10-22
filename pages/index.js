import {Container, Box, Heading, Image, useColorModeValue} from '@chakra-ui/react';
import Section from '../components/section';
import Fonts from '../components/fonts';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear, BioWord } from '../components/lebenslauf';
//<Box borderRadius="lg" bg={useColorModeValue('gray.200')}  p={3} mb={8} align="center">
//Mein Name ist Tarkan Yildirim, ich bin Wirtschaftsinformatik Student an der HFU.
//</Box>
const Seite = ( ) => {
    return (
        <Container maxWidth="100ch">


            <Box display={{sm: 'flex'}}>
                <Box flexGrow= {3}>
                    <Heading as="h2" size="xl" variant = "page-title">
                        Tarkan Yildirim
                    </Heading>
            <p>Wirtschaftsinformatik: Webprogrammierung/Datenanalyse/Java Programmierung</p>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md:6}} align="center">
                <Image 
                borderColor="gray.600" 
                borderWidth={2} 
                borderStyle="solid"
                maxWidth="7rem"
                display="inline-block" 
                //borderRadius="full" 
                src="/images/bild.jpg" 
                alt="Hier sollte eigentlich mein Bild sein :("/>
            </Box>
            </Box>
            <Section delay={0.2}>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <Heading as="h3" size="lg" variant="section-title">&Uuml;ber mich</Heading>
                <p>&nbsp;</p>
                <Paragraph>Ich bin Tarkan Yildirim, zurzeit studiere ich im 6 Semester Wirtschaftsinformatik
                    an der Hochschule Furtwangen. Mein Studium ist vor allem vertieft in die Programmierung wie auch der Datenanalyse.
                    Durch das Softwareprojekt, wie auch dem Studium, habe ich Kenntnisse in HTML, CSS/SCSS, Javascript/Typescript, Java und SQL wie auch erste 
                    Erfahrungen in PHP und Python. Ich habe und arbeite auch heute noch mit verschiedenen UI librarys wie z.B. Angular,
                     auch besuche ich in diesem Semester die WPV "WebProgrammierung" in der ich neue Kenntnisse über Javascript
                    und React sammle. Für dieses Online Portfolio wurde vor allem die UI library "Chakra UI" und "Next.js" genutzt,
                    aber ich habe auch Kenntnisse in der library three.js gesammelt mit dem Ziel dynamische Websites zu erstellen. Mein GitHub kann unter dem tab
                    "Social Media" ausgerufen werden, doch die meisten Projekte sind unter diesem noch unvollständig oder auf Privat gestellt.</Paragraph>
            <Box align="center">

            </Box>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" size="lg" variant="section-title">Lebenslauf</Heading>
                <p>&nbsp;</p>
                <BioSection>
                    <BioYear>Name</BioYear>
                    <BioWord>Tarkan Yildirim</BioWord>
                </BioSection>
                <BioSection>
                    <BioYear>1999</BioYear>
                    <BioWord>Geboren in Deutschland/Karlsruhe</BioWord> 
                </BioSection>
                <BioSection>
                    <BioYear>2010-2015</BioYear>
                    <BioWord>Hauptschule Schillerschule Grund- und Werkrealschule</BioWord>
                </BioSection>
                <BioSection>
                    <BioYear>2015-2016</BioYear>
                    <BioWord>Weiterführende Schule Schillerschule Grund- und Werkrealschule, Abschluss Mittlere Reife</BioWord>
                </BioSection>
                <BioSection>
                    <BioYear>2016-2017</BioYear>
                    <BioWord>Kaufmännische Schule Stuttgart Süd, kaufmännisches Berufskolleg 1</BioWord>
                </BioSection>
                <BioSection>
                    <BioYear>2017-2018</BioYear>
                    <BioWord>Kaufmännische Schule Stuttgart Süd, kaufmännisches Berufskolleg 2, Abschluss: Fachhochschulreife</BioWord>
                </BioSection>
                <BioSection>
                    <BioYear>2018-2022</BioYear>
                    <BioWord>Hochschule Furtwangen, Studiengang Wirtschaftsinformatik, 6.Fachsemester</BioWord>
                </BioSection>
            </Section>
            <Section delay={0.5}>
                <Heading as= "h3" variant="section-title">
                    Kenntinsse
                </Heading>
                <BioSection>
                    <BioYear>EDV Kentnisse:</BioYear>
                    <BioWord>Solide Kentnisse in Word, Excel und Powerpoint</BioWord>
                </BioSection>
                <p>&nbsp;</p>
                <BioSection>
                    <BioYear>Programmiersprachen:</BioYear>
                    <BioWord>Gute Kentnisse in: Java, R, CSS/SCSS, HTML, Javascript, SQL und Librarys: Angular, Three.js und Chakra.UI
                    <br></br>Erfahrungen in: PHP, Typescript und Python
                    </BioWord>
                </BioSection>
                <p>&nbsp;</p>
                <BioSection>
                    <BioYear>Projektmanagement:</BioYear>
                    <BioWord>Gute Kenntinsse in: Scrum und UML</BioWord>
                </BioSection>
                <p>&nbsp;</p>
                <BioSection>
                    <BioYear>Sprachen:</BioYear>
                    <BioWord>Deutsch: Sehr gut in Wort und Schrift
                        <br></br>
                        Englisch: Gut in Wort und Schrift
                        <br></br>
                        T&uuml;rkisch: Grundkenntnisse
                    </BioWord>
                </BioSection>
                <p>&nbsp;</p>
            </Section>
        </Container>
    )
}

export default Seite