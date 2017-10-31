import { Injectable } from '@angular/core';
const ANIMATE_NAME_IN=[
  'fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight',
  'fadeInRightBig','fadeInUp','fadeInUpBig','flipInX','flipInY','lightSpeedIn','rotateIn',
  'rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','slideInDown','slideInLeft','rotateIn'
]
const ANIMATE_NAME_OUT=[
  'fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight',
  'fadeOutRightBig','fadeOutUp','fadeOutUpBig','flipOutX','flipOutY','lightSpeedOut',
  'rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight',
  'slideOutLeft'
]
@Injectable()
export class AnimateService {

  constructor() { }
  public getAnimateIn(): string{
    var Range = ANIMATE_NAME_IN.length - 1;
    var Rand = Math.random();
    var num = 0 + Math.round(Rand * Range);
    return ANIMATE_NAME_IN[num];
  }

  public getAnimateOut(): string{
    var Range = ANIMATE_NAME_OUT.length - 1;
    var Rand = Math.random();
    var num = 0 + Math.round(Rand * Range);
    return ANIMATE_NAME_OUT[num];
  }
}
