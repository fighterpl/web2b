var segundos = 0;
        function temporizador(){
            segundos = segundos + 1;
            document.getElementById('contador').innerHTML = segundos;
        }
function iniciar(){
    setInterval(temporizador, 1000);
}
function parar(){
    clearInterval(1);
}