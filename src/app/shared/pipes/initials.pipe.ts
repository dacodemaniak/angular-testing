import { Pipe, PipeTransform } from '@angular/core';

type InitialTransformType = {
  lastnameFirst?: boolean
  dontUseCompoundFirstname?: boolean
}

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  private transformType: InitialTransformType = {
    lastnameFirst: false,
    dontUseCompoundFirstname: false
  }

  transform(value: string, ...args: InitialTransformType[]): string {
    if (value.trim().length > 0) {
      // Store the transform object if set
      if (args.length) {
        this.transformType = args[0]
      }

      const regex: RegExp = this.transformType.dontUseCompoundFirstname ? /[\s]/ : /[-\s]/
      const splitValue: Array<string> = value.split(regex)
  
      const initials = splitValue.map((word: string) => {
        return word.charAt(0).toLocaleUpperCase()
      })

      if (this.transformType.lastnameFirst)
        initials.reverse()
      
      return initials.join('')
    }

    return '';
  }

}
