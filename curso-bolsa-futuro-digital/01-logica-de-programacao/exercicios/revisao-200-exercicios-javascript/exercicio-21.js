//Exercício 21: Escreva um programa que determina a estação do ano com base no mês.

let mes = prompt(`Escolha um mês para verificar sua estação do ano:
1. Janeiro
2. Fevereiro
3. Março
4. Abril
5. Maio
6. Junho
7. Julho
8. Agosto
9. Setembro
10. Outubro
11. Novembro
12. Dezembro

Digite o número referente a opção escolhida:`)

switch (mes) {
    case "12":
    case "1":
    case "2":
        alert(`O mês estará no Verão`)
        break

    case "3":
    case "4":
    case "5":
        alert(`O mês estará no Outono`)
        break

    case "6":
    case "7":
    case "8":
        alert(`O mês estará no Inverno`)
        break

    case "9":
    case "10":
    case "11":
        alert(`O mês estará na Primavera`)
        break
    
    default:
        alert("Opção não identificada")

}