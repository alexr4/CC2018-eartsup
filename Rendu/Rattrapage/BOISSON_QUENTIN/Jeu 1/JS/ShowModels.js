function initModel1()
{
  for(var i = 0; i < cols; i++)
  {
    for(var j = 0; j < rows; j++)
    {
      model1[i][j] = false;
      switch(j)
      {
        case 0: if(i == 1 || i == 2 || i == 3 || i == 4 || i == 11 || i == 12 || i == 13 || i == 14) model1[i][j] = true; break;
        case 1: if(i == 0 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 15) model1[i][j] = true; break;
        case 2: if(i == 0 || i == 2 || i == 3 || i == 5 || i == 10 || i == 12 || i == 13 || i == 15) model1[i][j] = true; break;
        case 3: if(i == 0 || i == 5 || i == 10 || i == 15) model1[i][j] = true; break;
        case 4: if(i == 1 || i == 2 || i == 3 || i == 4 || i == 11 || i == 12 || i == 13 || i == 14) model1[i][j] = true; break;
        case 5: if(i == 0 || i == 15) model1[i][j] = true; break;
        case 6: if(i == 0 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 12 || i == 13 || i == 15) model1[i][j] = true; break;
        case 7: if(i == 0 || i == 15) model1[i][j] = true; break;
        case 8: if(i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 12 || i == 13 ||i == 14) model1[i][j] = true; break;
        case 9: if(i == 1 || i == 2 || i == 13 || i == 14) model1[i][j] = true; break;
        case 10: if(i == 0 || i == 2 || i == 13 || i == 15) model1[i][j] = true; break;
        case 11: if(i == 0 || i == 4 || i == 6 || i == 9 || i == 11 || i == 15) model1[i][j] = true; break;
        case 12: if(i == 1 || i == 4 || i == 6 || i == 9 || i == 11 || i == 14) model1[i][j] = true; break;
        case 13: if(i == 0 || i == 4 || i == 6 || i == 7 || i == 8 || i == 9 || i == 11 || i == 15) model1[i][j] = true; break;
        case 14: if(i == 0 || i == 1 || i == 2 || i == 3 || i == 6 || i == 9 || i == 12 || i == 13 || i == 14 || i == 15) model1[i][j] = true; break;
        case 15: if(i == 3 || i == 4 || i == 5 || i == 10 || i == 11 || i == 12) model1[i][j] = true; break;
        default: break;
      }
    }
  }
}

function initModel2()
{
  for(var i = 0; i < cols; i++)
  {
    for(var j = 0; j < rows; j++)
    {
      model2[i][j] = false;
      switch(j)
      {
        case 0: if(i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 12) model2[i][j] = true; break;
        case 1: if(i == 2 || i == 13) model2[i][j] = true; break;
        case 2: if(i == 1 || i == 14) model2[i][j] = true; break;
        case 3: if(i == 1 || i == 14) model2[i][j] = true; break;
        case 4: if(i == 0 || i == 15) model2[i][j] = true; break;
        case 5: if(i == 0 || i == 4 || i == 5 || i == 10 || i == 11 || i == 15) model2[i][j] = true; break;
        case 6: if(i == 0 || i == 3 || i == 4 || i == 5 || i == 6 || i == 9 || i == 10 || i == 11 || i == 12 || i == 15) model2[i][j] = true; break;
        case 7: if(i == 0 || i == 3 || i == 4 || i == 5 || i == 6 || i == 9 || i == 10 || i == 11 || i == 12 || i == 15) model2[i][j] = true; break;
        case 8: if(i == 0 || i == 4 || i == 5 || i == 10 || i == 11 || i == 15) model2[i][j] = true; break;
        case 9: if(i == 0 || i == 15) model2[i][j] = true; break;
        case 10: if(i == 0 || i == 7 || i == 8 || i == 15) model2[i][j] = true; break;
        case 11: if(i == 0 || i == 6 || i == 7 || i == 8 || i == 9 || i == 15) model2[i][j] = true; break;
        case 12: if(i == 1 || i == 2 || i == 13 || i == 14) model2[i][j] = true; break;
        case 13: if(i == 3 || i == 12) model2[i][j] = true; break;
        case 14: if(i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) model2[i][j] = true; break;
        case 15: if(i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 12) model2[i][j] = true; break;
        default: break;
      }
    }
  }
}

function initModel3()
{
  for(var i = 0; i < cols; i++)
  {
    for(var j = 0; j < rows; j++)
    {
      model3[i][j] = false;
      switch(j)
      {
        case 0: if(i == 6 || i == 7 || i == 8 || i == 9) model3[i][j] = true; break;
        case 1: if(i == 4 || i == 5 || i == 10 || i == 11) model3[i][j] = true; break;
        case 2: if(i == 3 || i == 12) model3[i][j] = true; break;
        case 3: if(i == 2 || i == 5 || i == 6 || i == 10 || i == 11 || i == 13) model3[i][j] = true; break;
        case 4: if(i == 2 || i == 4 || i == 5 || i == 6 || i == 7 || i == 9 || i == 10 || i == 11 || i == 12 || i == 14) model3[i][j] = true; break;
        case 5: if(i == 2 || i == 4 || i == 5 || i == 6 || i == 7 || i == 9 || i == 10 || i == 11 || i == 12 || i == 14) model3[i][j] = true; break;
        case 6: if(i == 1 || i == 4 || i == 5 || i == 9 || i == 10 || i == 14) model3[i][j] = true; break;
        case 7: if(i == 1 || i == 4 || i == 5 || i == 9 || i == 10 || i == 14) model3[i][j] = true; break;
        case 8: if(i == 1 || i == 5 || i == 6 || i == 10 || i == 11 || i == 14) model3[i][j] = true; break;
        case 9: if(i == 1 || i == 14) model3[i][j] = true; break;
        case 10: if(i == 1 || i == 14) model3[i][j] = true; break;
        case 11: if(i == 1 || i == 14) model3[i][j] = true; break;
        case 12: if(i == 1 || i == 14) model3[i][j] = true; break;
        case 13: if(i == 1 || i == 3 || i == 7 || i == 12 || i == 14) model3[i][j] = true; break;
        case 14: if(i == 1 || i == 2 || i == 4 || i == 6 || i == 8 || i == 11 || i == 13 || i == 14) model3[i][j] = true; break;
        case 15: if(i == 1 || i == 5 || i == 9 || i == 10 || i == 14) model3[i][j] = true; break;
        default: break;
      }
    }
  }
}
