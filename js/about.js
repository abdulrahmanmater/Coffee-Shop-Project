import { teamMembers } from "../data/team.data.js";

const teamContainer =
    document.getElementById("teamContainer");

function createTeamCard(member, columnClass) {
    const column =
        document.createElement("div");

    column.className = columnClass;

    column.innerHTML = `
        <article class="team-card">
            <img
                src="${member.image}"
                alt="${member.name}"
                class="team-card-image"
            />

            <div class="team-card-content">
                <p class="team-card-title">
                    ${member.title}
                </p>

                <h3 class="team-card-name">
                    ${member.name}
                </h3>
            </div>
        </article>
    `;

    return column;
}

function createTeamRow(members, columnClass) {
    const row =
        document.createElement("div");

    row.className =
        "row g-4 justify-content-center mb-4";

    members.forEach((member) => {
        row.appendChild(
            createTeamCard(
                member,
                columnClass
            )
        );
    });

    return row;
}

if (teamContainer) {
    const firstRow =
        teamMembers.slice(0, 3);

    const secondRow =
        teamMembers.slice(3);

    if (firstRow.length) {
        teamContainer.appendChild(
            createTeamRow(
                firstRow,
                "col-12 col-md-4"
            )
        );
    }

    if (secondRow.length) {
        teamContainer.appendChild(
            createTeamRow(
                secondRow,
                "col-12 col-md-4"
            )
        );
    }
}