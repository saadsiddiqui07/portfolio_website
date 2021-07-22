import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles"

const Hero = () => {
	return (
		<>
			<Section row nopadding>
				<LeftSection>
					<SectionTitle main center>
						Hello! <br />
						I'm Saad Siddiqui
					</SectionTitle>
					<SectionText>
						I code simple and elegant components.
					</SectionText>
				</LeftSection>
			</Section>
		</>
	)
}

export default Hero;