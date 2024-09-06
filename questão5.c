/* 
    Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;
*/

// Para evitar o uso de funções eu fiz isso em C sim, em C ANSI.

#include <stdio.h>
#include <string.h>

void inverterString(char *str)
{
    int inicio = 0;
    int fim = strlen(str) - 1;

    while (inicio < fim)
    {
        char temp = str[inicio];
        str[inicio] = str[fim];
        str[fim] = temp;

        inicio++;
        fim--;
    }
}

int main()
{
    char str[100];

    printf("Digite uma string: ");
    fgets(str, sizeof(str), stdin);

    // Remove o caractere de nova linha se estiver presente para que não cause problemas
    str[strcspn(str, "\n")] = '\0';

    inverterString(str);

    printf("String invertida: %s\n", str);

    return 0;
}