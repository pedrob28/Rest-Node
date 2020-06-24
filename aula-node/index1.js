const express = require('express');
const app = express();

app.use(express.json())

app.get('/:conv', (request, response) => {
    const conv = request.params.conv
    let Resultado

    Resultado = conv - 32 / 1.8 ;
    response.send("Valor convertido em Fahrenheit:" + Resultado)
})



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
}
)