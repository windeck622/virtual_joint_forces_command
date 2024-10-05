var yearValue = new Date().getFullYear();

let appFooter = `
    <footer class="footer">
        <p class="infos">&copy; ${yearValue} | Virtual Joint Forces Command | Design by <a href="http://www.devcrud.com">DevCRUD</a></p>       
        <span>|</span>  
        <div class="links">
            <a href="index.html#About-Us-Section">About Us</a>
            <a href="orbat.html#">ORBAT</a>
            <a href="train.html#">Training</a>
            <a href="rules.html#">Rules</a>
        </div>
    </footer><!-- end of footer -->
`;
document.getElementById("app-footer").innerHTML = appFooter;