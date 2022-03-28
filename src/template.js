const generatePage = members => {
    const team = []
    const createManager = manager => {
        return `
        <article class="card">
            <h2 class="header">${manager.getName()}</h2>
            <div class="header">(${manager.getRole()})</div>
            <div>ID: ${manager.getId()}</div>
            <div>Email: ${manager.getEmail()}</div>
            <div>Office Number: ${manager.getOfficeNumber()}</div>
        </article>
        `
    }
    const createEngineer = engineer => {
        return `
        <article class="card">
            <h2 class="header">${engineer.getName()}</h2>
            <div class="header">(${engineer.getRole()})</div>
            <div>ID: ${engineer.getId()}</div>
            <div>$Email: ${engineer.getEmail()}</div>
            <div>Github: ${engineer.getGithub()}</div>
        </article>
        `
    }
    const createIntern = intern => {
        return `
        <article class="card">
            <h2 class="header">${intern.getName()}</h2>
            <div class="header">(${intern.getRole()})</div>
            <div>${intern.getId()}</div>
            <div>${intern.getEmail()}</div>
            <div>${intern.getSchool()}</div>
        </article>
        `
    }
    team.push(members.filter(role => role.getRole() === 'Manager').map(manager => createManager(manager)))
    team.push(members.filter(role => role.getRole() === 'Engineer').map(engineer => createEngineer(engineer)))
    team.push(members.filter(role => role.getRole() === 'Intern').map(intern => createIntern(intern)))
    return team.join('')
}

module.exports = members => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <link rel="stylesheet" href="../src/style.css">
</head>
<body>
    <header class="header">
        <h1>My team</h1>
    </header>
    <main class="contentpanel">
        <section>
            <div>
                <div>
                    <h1></h1>
                </div>
            </div>
        </section>
        <section>
            <div>
                <div>
                    ${generatePage(members)}
                </div>
            </div>
        </section>
    </main>
</body>
</html>
    `
}