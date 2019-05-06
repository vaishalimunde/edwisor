function calculate_age(day,month,year)
{
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year -year;

    if ( today_month < (month - 1))
    {
        age--;
    }
    if (((month - 1) == today_month) && (today_day <day))
    {
        age--;
    }
    return age;
}
