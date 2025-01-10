var yearValue = new Date().getFullYear();

let appFooter = `
    <footer class="footer">
        <p class="infos">&copy; ${yearValue} | Virtual Joint Forces Command Inc.       
        <span>|</span>  
        <div class="links">
            <a href="index.html#About-Us-Section">About Us</a>
            <a href="orbat.html#">ORBAT</a>
            <a href="train.html#">Training</a>
            <a href="rules.html#">Rules</a>
        </div>
        <span>|</span> 
        <div>Design by <a href="http://www.devcrud.com">DevCRUD</a></p></div>
    </footer><!-- end of footer -->
`;
document.getElementById("app-footer").innerHTML = appFooter;