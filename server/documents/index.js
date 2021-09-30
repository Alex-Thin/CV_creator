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
				margin-left: 1em;
				top: 0;
			}

			.p-info h2 {
				color: #636262;
			}

			.user-name {
				font-size: 80px;
			}

			.personal-address {
				color: white;
				margin-top: -1.7em;
				font-size: 24px;
			}

			.personal-description {
				margon-top: -0.5em;
			}

			.about-myself {
				margin-top: 65px;
			}

			.left-side {
				width: 20%;
				vertical-align: top;
				text-align: center;
			}

			.left-side img {
				margin-top: 1em;
				width: 200px;
				height: 200px;
				border-radius: 50%;
				border: 3px solid white;
			}

			.right-side {
				width: 70%;
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
				font-weight: lighter;
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
			}

			.light-d {
				color: #636262;
			}

			.work-history {
				margin-top: 1em;
			}

			.invoice-box {
				background-image: url("https://sun9-30.userapi.com/impg/_5pm6PVx6kBplmTJoqlnDvQJyBaHq3k7oRS1nw/3-L2_GLBXAQ.jpg?size=2126x240&quality=96&sign=927b23fb8e38762700e83eab717e8b78&type=album");
				background-repeat: no-repeat;
			}
		</style>
	</head>
	<body>
		<div class="invoice-box">
			<table>
				<tr>
					<td class="left-side">
						<img src="${photo}">
						<div class="contacts">
							${doc_links}
						</div>
					</td>
					<td class="right-side">
						<div class="p-info">
							${doc_personal}
						</div>
						<div>
							${doc_skills}
						</div>
						<div>
							${doc_workExp}
						</div>
						${doc_education}
						${doc_courses}
						${doc_projects}
					</td>
				</tr>
			</table>
		</div>
	</body>
</html>
`
};
