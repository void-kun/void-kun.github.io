#include "matrix.h"

matrix static multiply(const matrix matrix_a, const matrix matrix_b)
{
  int16_t m_a = matrix_a.size(),
          n_a = matrix_a.at(0).size(),
          m_b = matrix_b.size(),
          n_b = matrix_b.at(0).size();
  matrix result(m_a, std::vector<double>(n_b));

  if (n_a != m_b)
  {
    std::cout << "Number of column's matrix A must equal number of row's matrix B";
    return result;
  }

  for (int16_t i = 0; i < m_a; i++)
  {
    for (int16_t j = 0; j < n_b; j++)
    {
      result[i][j] = 0;
      for (int16_t k = 0; k < n_a; k++)
      {
        result[i][j] += matrix_a[i][k] * matrix_b[k][j];
      }
    }
  }
  return result;
}

int main(int argc, char const *argv[])
{

  matrix matrix_a = {{0.3, 0.2}, {2, 4}};
  matrix matrix_b = {{32, 23}, {-3, 42}};
  matrix multi = multiply(matrix_a, matrix_b);

  for (int16_t i = 0; i < multi.size(); i++)
  {
    for (int16_t j = 0; j < multi.at(0).size(); j++)
    {
      std::cout << multi[i][j] << " ";
    }
    std::cout << std::endl;
  }
  return 0;
}
