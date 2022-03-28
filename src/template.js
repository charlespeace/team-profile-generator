const generatePage = members => {
    const team = []
    const createManager = manager => {
        return `
        <article>
            <div>${manager.getName()}</div>
            <div>(${manager.getRole()})</div>
            <div>ID: ${manager.getId()}</div>
            <div>Email: ${manager.getEmail()}</div>
            <div>Office Number: ${manager.getOfficeNumber()}</div>
        </article>
        `
    }
    const createEngineer = engineer => {
        return `
        <article>
            <div>${engineer.getName()}</div>
            <div>(${engineer.getRole()})</div>
            <div>ID: ${engineer.getId()}</div>
            <div>$Email: {engineer.getEmail()}</div>
            <div>Github: ${engineer.getGithub()}</div>
        </article>
        `
    }
    const createIntern = intern => {
        return `
        <article>
            <div>${intern.getName()}</div>
            <div>(${intern.getRole()})</div>
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3">
</head>
<body>
    <header>
        <h1>My team</h1>
    </header>
    <main>
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