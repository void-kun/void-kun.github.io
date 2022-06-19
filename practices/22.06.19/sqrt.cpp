#include <iostream>
#include <math.h>
using namespace std;

#define EPSILON 0.00000001f

double sqrt(double number)
{
  double result = 1.0f;
  while (fabs(result * result - number) / number >= EPSILON)
  {
    result = (number / result - result) / 2 + result;
  }
  return result;
}

int main(int argc, char const *argv[])
{
  double number = 0.0f;
  cout << "Number = ";
  cin >> number;

  double resultSqrt = sqrt(number);
  cout << "Sqrt = " << resultSqrt << endl;
  return 0;
}
