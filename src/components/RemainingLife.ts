import { Options, Vue } from 'vue-class-component';

function dateMonth(date1: Date, date2: Date): number {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  return (year1 - year2) * 12 + month1 - month2;
}

@Options({
  props: {},
})
export default class HelloWorld extends Vue {
  birth: Date = new Date();

  idealAge = 100;
  unit = 3;

  get pastYear() {
    return new Date().getFullYear() - this.birth.getFullYear();
  }

  get pastMonth() {
    return dateMonth(new Date(), this.birth);
  }

  get idealMonth() {
    return this.idealAge * 12;
  }

  private disabledDate(date: Date) {
    return date.getTime() > new Date().getTime();
  }
}
