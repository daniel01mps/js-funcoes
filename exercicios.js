function boasVindas(){
    document.write('Seja bem vindo(a) Thiago');
}
boasVindas()

function calcIdade(ano){
    document.write(`<h1>a idade do tiago é ${2024 - ano}</h1>`)
}
calcIdade(1993)

function frequenciaAlunos(presentes, total){
    return (((total - presentes)*100)/total).toFixed(0);
}
document.write(`<h1>O percentual de faltantes é: ${frequenciaAlunos(10, 12)}%</h1>`);    

///

    function mediasNotas(teorica, pratica1, pratica2){
        return (((teorica*2)) + ((pratica1*1) + (pratica2*1)))/4
    }
    document.write(`<h1>Sua média é: ${mediasNotas(10, 10, 10)}</h1>`)    

function idntPeriodo(horario) {
    const [hora, minutos] = horario.split(':')
    if (Number(hora) >= 5 && Number(hora) < 12) return 'manhã';
    else if (Number(hora) >= 12 && Number(hora) < 18) return 'tarde';
    else return 'noite';
}   

    const horario1 = idntPeriodo('12:30')
    const horario2 = idntPeriodo('12:31')
    const horario3 = idntPeriodo('13:30')
    const horario4 = idntPeriodo('14:30')
    const horario5 = idntPeriodo('17:30')
    const horario6 = idntPeriodo('20:30')
    const horario7 = idntPeriodo('21:30')
    const horario8 = idntPeriodo('22:30')
    const horario9 = idntPeriodo('14:30')
    const horario10 = idntPeriodo('11:30')

    document.write(horario1)
    document.write(horario2)
    document.write(horario3)
    document.write(horario4)
    document.write(horario5)
    document.write(horario6)
    document.write(horario7)
    document.write(horario8)
    document.write(horario9)
    document.write(horario10)

    let manha = 0;
    let tarde = 0;
    let noite = 0;

function contagemDePeriodos(horario) {
if (horario == 'manhã') manhã++;
else if (horario == 'tarde') tarde++;
else noite++;
}

    contagemDePeriodos(horario1)
    contagemDePeriodos(horario2)
    contagemDePeriodos(horario3)
    contagemDePeriodos(horario4)
    contagemDePeriodos(horario5)
    contagemDePeriodos(horario6)
    contagemDePeriodos(horario7)
    contagemDePeriodos(horario8)
    contagemDePeriodos(horario9)
    contagemDePeriodos(horario10)

    document.write(`<h1>${manha}</h1>`)
    document.write(`<h1>${tarde}</h1>`)
    document.write(`<h1>${noite}</h1>`)