module.exports = ({ doc_workExp, doc_education, doc_skills, doc_courses, doc_projects, doc_personal, doc_links, photo, height}) => {
	const today = new Date();
	return `
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>PDF Result Template</title>
	<style>
		.p-info {
			text-align: left;
			margin-top: 10px;
		}

		.p-info h2 {
			font-family: 'Georgia';
		}

		.user-name {
			font-size: 80px;
		}

		.about-myself {
			margin-top: 65px;
		}

		.personal-address {
			color: gray;
			margin-top: -1.7em;
			font-size: 24px;
		}

		.personal-description {
			margin-left: 30%;
			margon-top: 3em;
		}

		.left-side {
			width: 65%;
			vertical-align: top;
		}

		.right-side img {
			margin-top: 1em;
			width: 200px;
			height: 200px;
			border: 3px solid gray;
		}

		.right-side {
			width: 25%;
			vertical-align: top;
		}

		.skills {
			margin-left: 30%;
			width: 70%;
		}

		.skills h2 {
			font-family: 'Georgia';
		}

		.hard-skills {
			width: 25%;
			vertical-align: top;
		}

		.hard-skills ul {
			padding: 0;
			margin-left: 1em;
		}

		.soft-skills {
			width: 25%;
			margin-right: 10%;
			vertical-align: top;
		}

		.contacts {
			text-align: left;
			color: black;
			margin-left: 1em;
		}

		.contacts h3 {
			font-weight: bold;
			font-size: 24px;
		}

		.contacts p {
			margin-top: -0.5em;
		}

		e-city {
			color: #636262;
		}

		.main-d {
			font-size: 28px;
			font-family: Tahoma;
		}

		.light-d {
			color: #636262;
			text-align: right;
			font-size: 14px;
		}

		.work-history {
			margin-top: 1em;
			margin-left: 30%;
		}

		.education {
			margin-left: 30%;
		}

		.courses {
			margin-left: 30%;
		}

		.project {
			margin-left: 30%;
		}

		.e-description {
			margin-left: 30%;
			margin-top: 1em;
		}

		h2 {
			margin-left: 1em;
		}

	</style>
</head>
<body>
	<div class="invoice-box">
		<table>
			<tr>
				<td class="left-side">
					<div class="p-info">
						${doc_personal}
					</div>
					${doc_skills}
					${doc_workExp}
					${doc_education}
					${doc_courses}
					${doc_projects}
				</td>
				<td class="right-side">
					<img src=${photo}>
					<div class="contacts">
						${doc_links}
					</div>
				</td>
			</tr>
		</table>
	</div>
</body>
</html>
`
};
