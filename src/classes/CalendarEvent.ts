interface ICalendarEvent {
  id: any
  date: Date
  startDate: Date
  endDate: Date | null
  color: string | null
  category: any
  description: string | null
}

class CalendarEvent implements ICalendarEvent {
  public id: any
  public date: Date
  public startDate: Date
  public endDate: Date | null
  public color: string | null
  public category: any
  public description: string | null

  constructor(event: CalendarEvent) {
    this.id = event.id;
    this.date = event.date;
    this.startDate = event.date;
    this.color = event.color === undefined ? null : event.color;
    this.endDate = event.endDate === undefined ? null : event.endDate;
    this.category = event.category === undefined ? -1 : event.category;
    this.description =
      event.description === undefined ? null : event.description;
  }
}

export default CalendarEvent;
