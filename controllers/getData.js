
const consultarCNPJ = require('consultar-cnpj')

async function getCNPJ(req, res) {
    cnpj = req.params.cnpj

    const empresa = await consultarCNPJ(cnpj)
    console.log(empresa)

    return res.status(200).json(empresa);


}

async function iniciar(req, res) {

    await getCNPJ(req, res)
}


module.exports = {
    iniciar: iniciar,
};

