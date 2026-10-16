const disciplina = [{
    nome:"Web",
    cargaHoraria:60,
    professor:"John"}]

    disciplina[0].cargaHoraria+=20
    disciplina[0].periodo=2;
    delete disciplina[0].professor;

    console.log(disciplina);
    console.log(disciplina[0].nome);