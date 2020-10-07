import app from './app';

function main() {
    app.listen(process.env.PORT || 4000);
    console.log("Server up");

}

main();