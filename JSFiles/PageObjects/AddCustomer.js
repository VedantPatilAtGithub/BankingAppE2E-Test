"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addcustomer = void 0;
const protractor_1 = require("protractor");
class Addcustomer {
    constructor() {
        this.addcustomerLink = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Add Customer')]"));
        this.firstName = protractor_1.element(protractor_1.by.model("fName"));
        this.lastName = protractor_1.element(protractor_1.by.model("lName"));
        this.postCode = protractor_1.element(protractor_1.by.model("postCd"));
        this.AddcustomerButton = protractor_1.element(protractor_1.by.xpath("//button[text()='Add Customer']"));
    }
}
exports.Addcustomer = Addcustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9BZGRDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxXQUFXO0lBT3BCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFBO1FBQ3JGLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0lBRWxGLENBQUM7Q0FDSjtBQWZELGtDQWVDIn0=