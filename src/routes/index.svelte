<script>
    import { url } from '$app/stores'
import base from '$lib/base.js'

    let days
    
    const submitForm = async (data) => {
        const formData = new FormData(data.currentTarget)
        days = formData.getAll('days')
        const res = await fetch("registrant.json", {
            method: "POST",
            body: formData,
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
        {#if days.includes('Friday')}<br/>Friday (2pm-4:30pm){/if}
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
        Name&nbsp;
        <input type="text" name="name" required minlength="1" />
    </label>

    <label for="">
        Thursday (3pm-6pm)
        <input type="checkbox" name="days" value="Thursday"/>   
    </label>

    <label for="">
        Friday (2pm-4:30pm)
        <input type="checkbox" name="days" value="Friday"/>   
    </label>

    <label for="">
        Saturday (6am-2pm)&nbsp;
        <input type="checkbox" name="days" value="Saturday"/>   
    </label>

    <button type="submit">Submit</button>
</form>
{/if}

<div id='notice'>
    *** As a professional courtesy, anyone who has signed up and is not able to make it please tell Brad or Lauren ahead of time so we can prepare and find a replacement ***
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
        background-size: cover;
        position: absolute;
        top: 0;
        z-index: -1;
        background-position: 50% 50%;
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
            width: 36px;
            height: 36px;
        }

        label {
            line-height: 42px;
            height: 42px;
        }
    }
</style>