import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isMongoId } from "./isMongoId";

it("isMongoId", () => {
    runtest(testdata, isMongoId)
})
const testdata: TestData[] = [
    {
        it: 'isMongoId',
        valid: [
            '507f1f77bcf86cd799439011',
          ],
          invalid: [
            '507f1f77bcf86cd7994390',
            '507f1f77bcf86cd79943901z',
            '',
            '507f1f77bcf86cd799439011 ',
          ]
    }
]