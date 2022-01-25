export const post = async ({ params, request }) => {
    const body = await request.formData();
    const name = body.get("name");
    const days = body.getAll("days");
    let fetchUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdDw9nf3zt8ebxN9kZLIYLAGGmmFcSZrT7_FoHzfiYhpm3ehw/formResponse?usp=pp_url&entry.391768003=${name}`;
    
    if (days.includes('Thursday')) fetchUrl += '&entry.1314416783=Thursday';
    if (days.includes('Friday')) fetchUrl += '&entry.1314416783=Friday';
    if (days.includes('Saturday')) fetchUrl += '&entry.1314416783=Saturday';

    fetchUrl += '&submit=Submit'

    const res = await fetch(fetchUrl);

    if (res.status === 200) {
        return {
            status: 200,
            body: {
                days
            }
        }
    } else {
        return {
            status: 404,
            body: {
                message: "failed"
            }
        }
    }
}