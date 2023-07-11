"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatrimonioModule = void 0;
const common_1 = require("@nestjs/common");
const patrimonio_controller_1 = require("./patrimonio.controller");
const patrimonio_dm_1 = require("./patrimonio.dm");
let PatrimonioModule = exports.PatrimonioModule = class PatrimonioModule {
};
exports.PatrimonioModule = PatrimonioModule = __decorate([
    (0, common_1.Module)({
        controllers: [patrimonio_controller_1.PatrimonioController],
        providers: [patrimonio_dm_1.PatrimoniosArmazenados]
    })
], PatrimonioModule);
//# sourceMappingURL=patrimonio.module.js.map