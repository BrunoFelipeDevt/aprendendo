function status(request, response) {
  response.status(200).json({ chave: "O pessoal do CRAM é show!!!" });
}

export default status;
