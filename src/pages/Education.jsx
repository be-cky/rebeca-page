import EducationCard from "../components/EducationCard.jsx";
import umaLogo from "../assets/social/MARCA UNIV. POSITIVA HORIZONTAL.png";
import cambridgeLogo from "../assets/social/cambridge-english-language-assessment-seeklogo.png";
import institutoLogo from "../assets/social/instituto.png";

export default function Education() {
	const educationItems = [
		{
			educationTitle: "Software Engineering",
			institution: "University of Málaga",
			date: "2021 - 2025",
			description: "Strong foundation in software engineering and computer science, including algorithms, data structures, software architecture, operating systems, databases, distributed systems, and computer networks, with experience in software development methodologies, requirements engineering, and building reliable and scalable systems.",
			image: umaLogo,
		},
		{
			educationTitle: "C1 Advanced (CAE)",
			institution: "Cambridge English Language Assessment",
			date: "2023",
			description: "Certification demonstrating advanced English proficiency (C1 level), including professional communication, technical reading and writing, and effective participation in international and collaborative environments.",
			image: cambridgeLogo,
		},
		{
			educationTitle: "Technological High School Diploma",
			institution: "IES Martín Rivero",
			date: "2019 - 2021",
			description: "Secondary education completed at IES Martín Rivero, an institution recognized for promoting scientific research, innovation, and student-led technology projects, with multiple national awards in academic and research competitions.",
			image: institutoLogo,
		},
	];

	return (
		<section className="w-100 d-flex justify-content-center" style={{ minHeight: "calc(100vh - 5.5rem)" }}>
			<div className="w-100" style={{ maxWidth: "1000px", marginTop: "4rem" }}>
				<div className="text-center mb-4">
					<h1 className="h2 mb-2">Education</h1>
					<p className="text-muted mb-0">Here you can find an overview of my academic background and some of the certifications I have obtained along the way</p>
				</div>

				<div className="d-grid gap-4">
					{educationItems.map((item) => (
						<EducationCard key={`${item.educationTitle}-${item.date}`} {...item} />
					))}
				</div>
			</div>
		</section>
	);
}
