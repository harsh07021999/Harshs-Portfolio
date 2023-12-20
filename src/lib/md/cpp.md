C++ is a powerful and widely-used programming language known for its performance, flexibility, and extensive use in system programming, game development, and application software. It is an extension of the C programming language with additional features like classes and objects, making it an object-oriented programming (OOP) language. C++ is appreciated for its ability to provide low-level memory manipulation along with high-level abstractions, offering developers a balance between efficiency and productivity.

```cpp
#include <iostream>

using namespace std;

double add(double num1, double num2) {
    return num1 + num2;
}

double subtract(double num1, double num2) {
    return num1 - num2;
}

int main() {
    double operand1, operand2;
    cout << "Enter first number: ";
    cin >> operand1;
    cout << "Enter second number: ";
    cin >> operand2;
    cout << "Sum: " << add(operand1, operand2) << endl;
    cout << "Difference: " << subtract(operand1, operand2) << endl;
    return 0;
}

```
