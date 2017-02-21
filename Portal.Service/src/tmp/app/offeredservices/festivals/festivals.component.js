"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var festivals_service_1 = require('./festivals.service');
var FestivalsComponent = (function () {
    function FestivalsComponent(festivalsService) {
        this.festivalsService = festivalsService;
        this.festivals = new Array();
    }
    FestivalsComponent.prototype.ngOnInit = function () {
        var self = this;
        this.festivalsService.getFestivals().subscribe(function (ret) { return self.festivals = ret; });
    };
    FestivalsComponent = __decorate([
        core_1.Component({
            selector: 'iacc-festivals',
            templateUrl: 'app/offeredservices/festivals/festivals.html'
        }), 
        __metadata('design:paramtypes', [festivals_service_1.FestivalService])
    ], FestivalsComponent);
    return FestivalsComponent;
}());
exports.FestivalsComponent = FestivalsComponent;

//# sourceMappingURL=festivals.component.js.map
