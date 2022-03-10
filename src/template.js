function generatePage() {

}

module.exports = () => {
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
                    ${generatePage()}
                </div>
            </div>
        </section>
    </main>
</body>
</html>
    `
}