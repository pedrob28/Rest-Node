const express = require('express');
const app = express();

app.use(express.json())

app.get('/:conv', (request, response) => {
    const conv = request.params.conv
    let Resultado

    Resultado = 9 * conv  / 5 + 32 ;
    response.send("Valor convertido:" + Resultado)
})



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
}
)