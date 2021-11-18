import { ICalculator } from "../models/ICalculator";

export default class CalculatorService {
  calculators : ICalculator[] = [
    {
      inputs: [
        {
          label: "current bank balance",
          type: "currency"
        },
        {
          label: "price of tacos",
          type: "currency"
        }
      ],
      outputs: [
        {
          label: "Number of tacos you could purchase right now",
          formula:"'current bank balance' / 'price of tacos'"
        }
      ]
    }
  ]
  getCalculators() {
    return this.calculators;
  }
}