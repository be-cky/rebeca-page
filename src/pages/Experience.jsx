import EducationCard from "../components/EducationCard.jsx";
import mamiLogo from "../assets/social/logo-de-mami-a-mami.png";

export default function Experience() {
	const experienceItems = [
		{
			educationTitle: "Web Development and Digital Marketing Intern",
			institution: "DMM",
			date: "2025",
			description:
				"Maintained and improved a WordPress-based platform using WPBakery Page Builder, managing website content such as listings and events while implementing frontend UI adjustments (layout, menus, buttons, icons, and cookie consent configuration). Monitored performance with Google PageSpeed Insights, investigated optimization strategies, and documented technical issues affecting site features. Also supported digital marketing efforts through Mailchimp and Instagram campaigns, while reporting and tracking bugs through support tickets with the remote development team.",
			image: mamiLogo,
		},
	];

	return (
		<section className="w-100 d-flex justify-content-center" style={{ minHeight: "calc(100vh - 5.5rem)" }}>
			<div className="w-100" style={{ maxWidth: "1000px", marginTop: "4rem" }}>
				<div className="text-center mb-4">
					<h1 className="h2 mb-2">Experience</h1>
					<p className="text-muted mb-0">Here you can find an overview of my professional experience and the roles where I have applied and developed my technical skills.</p>
				</div>

				<div className="d-grid gap-4">
					{experienceItems.map((item) => (
						<EducationCard key={`${item.educationTitle}-${item.date}`} {...item} />
					))}
				</div>
			</div>
		</section>
	);
}
