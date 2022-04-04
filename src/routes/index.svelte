<script>
    import base from '$lib/base.js'

    let days

    const post = async ({ params, request }) => {
        const body = request.formData;
        const name = body.get("name");
        const email = body.get("email");
        const phone = body.get("phone");
        const days = body.getAll("days");

        let fetchUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdDw9nf3zt8ebxN9kZLIYLAGGmmFcSZrT7_FoHzfiYhpm3ehw/formResponse?usp=pp_url&entry.391768003=${name}&entry.382350939=${email}&entry.134710918=${phone}`;
        
        if (days.includes('Thursday')) fetchUrl += '&entry.1314416783=Thursday';
        if (days.includes('Friday')) fetchUrl += '&entry.1314416783=Friday';
        if (days.includes('Saturday')) fetchUrl += '&entry.1314416783=Saturday';

        fetchUrl += '&submit=Submit'

        const res = await fetch(fetchUrl, { mode: 'no-cors' });

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
    
    const submitForm = async (data) => {
        const formData = new FormData(data.currentTarget)
        days = formData.getAll('days')
        const res = await post({
            params: {},
            request: { formData },
        })
    }
</script>


<div id='bg-wrpr' style='background: url({base}/bg_artistic.webp)'></div>

<div id='info'>
    <span id='community43'>Community43 @</span>
    <span id='uptown'>Uptown Farmers' Market</span>
</div>

{#if days}
    <h2 style='font-weight: 400; margin: 25px 0; max-width: unset; text-align: center'>
        Thank you for your signing up to work:
        {#if days.includes('Thursday')}<br/>Thursday (3pm-6pm){/if}
        {#if days.includes('Friday')}<br/>Friday (2pm-5:00pm){/if}
        {#if days.includes('Saturday')}<br/>Saturday (6am-2pm){/if}
    </h2>
{:else}
<div id='address'>
    5727 N Central Ave<br/>
    Phoenix, AZ 85012<br/>
    (North Phoenix Baptist Church)
</div>

<form on:submit|preventDefault="{submitForm}">
    <label for="">
        <span class='sm'>Name</span>
        <input type="text" name="name" required minlength="1" autocomplete="name" />
    </label>

    <label for="">
        <span class='sm'>Email</span>
        <input type="email" name="email" required />
    </label>

    <label for="">
        <span class='sm'>Phone</span>
        <input type="tel" name="phone" required />
    </label>

    <label for="">
        <span class='md'>Thursday Prep (3pm-6pm)</span>
        <input type="checkbox" name="days" value="Thursday"/>   
    </label>

    <label for="">
        <span class='md'>Friday Prep (2pm-5:00pm)</span>
        <input type="checkbox" name="days" value="Friday"/>   
    </label>

    <label for="">
        <span class='md'>Saturday Market (6am-2pm)</span>
        <input type="checkbox" name="days" value="Saturday"/>   
    </label>

    <button type="submit">Submit</button>
</form>
{/if}

<div id='notice'>
    *** As a professional courtesy, anyone who has signed up and is not able to make it please tell Brad or Jeniffer ahead of time so we can prepare and find a replacement ***
</div>


<style>
    @import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap);
    :global(body) {
        box-sizing: border-box;
        font-size: 18px;
        margin: 0;
        padding: 0;
    }
    
    :global(#svelte) {
        background-color: rgba(255,255,255,0.7);
        text-shadow: 0 1px rgb(255 255 255 / 75%);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 25px 0;
    }

    label {
        display: flex;
        justify-content: center;
    }

    label > span.sm {
        flex: 1 0 65px;
    }

    label > span.md {
        flex: 1 0 235px;
    }

    button[type="submit"] {
        margin-top: 25px;
    }

    label {
        display: flex;
    }

    #address {
        color: #6f007c;
        margin: 25px 0;
        text-align: center;
    }

    #bg-wrpr {
        margin-top: 137px; 
        width: 100%; 
        height: 100%; 
        background-size: cover !important;
        position: absolute;
        top: 0;
        z-index: -1;
        background-position: 50% 50% !important;
    }

    #info {
        background-color: #f7b323;
        box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 0;
    }

    #community43  {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
    }

    #notice {
        color: #f30104;
        margin-bottom: 25px;
        text-align: center;
    }

    #uptown {
        font-size: 32px;
    }

    @media (pointer: fine) {
        input[type="checkbox"] {
            min-width: 26px;
            width: 26px;
            height: 26px;
        }

        label {
            line-height: 32px;
            height: 32px;
        }
    }

    @media (pointer: coarse) {
        input[type="checkbox"] {
            min-width: 36px;
            width: 36px;
            height: 36px;
        }

        label {
            line-height: 42px;
            height: 42px;
        }
    }
</style>