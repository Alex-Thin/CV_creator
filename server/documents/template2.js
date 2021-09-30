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
			color: #636262;
			font-family: 'Courier New';
			font-size: 34px;
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
			margon-top: -0.5em;
		}

		.left-side {
			width: 65%;
			vertical-align: top;
		}

		.right-side img {
			margin-top: 1em;
			width: 200px;
			height: 200px;
			border-radius: 50%;
			border: 3px solid gray;
		}

		.right-side {
			width: 25%;
			vertical-align: top;
		}

		.skills {
			width: 100%;
		}

		.hard-skills {
			width: 50%;
			vertical-align: top;
		}

		.hard-skills ul {
			padding: 0;
			margin-left: 1em;
		}

		.soft-skills {
			width: 50%;
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
			font-family: Helvetica;
		}

		.light-d {
			color: #636262;
			text-align: right;
			font-size: 14px;
		}

		.work-history {
			margin-top: 1em;
		}

		.lineup {
			width: 96%;
			height: 3px;
			background-color: black;
			position: absolute;
			top: 250px;
		}

		.title-line {
			width: 100%;
			height: 2px;
			background: linear-gradient(to right, #949494, #fafafa);
			margin-bottom: 10px;
		}


		.e-description {
			margin-top: 1em;
		}

		h2 {
			color: #636262;
			margin-left: 1em;
			font-family: 'Courier New';
			font-size: 34px;
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
