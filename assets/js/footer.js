var yearValue = new Date().getFullYear();

let appFooter = `
    <footer class="footer">

        <div class="container col-md-10">
            <div class="col-md-6 col-lg-8 m-auto">
                
                <div class="links">
                    <a href="index.html#About-Us-Section">About Us</a>
                    <a href="orbat.html#">ORBAT</a>
                    <a href="train.html#">Training</a>
                    <a href="rules.html#">Rules</a>
                </div>

                <div class="row mb-5">
                    <p class="infos">&copy; ${yearValue} 501(c)(3) non-profit</p>
                    <span>|</span> 
                    <div>Virtual Joint Forces Command Inc.</div>
                    <span>|</span>  
                    <div>EIN: 33-2786845</div> 
                </div>
                <div class="row mb-5">
                    <div>Design by <a href="http://www.devcrud.com">DevCRUD</a></div> 
                </div>
            </div>
        </div>
        
    </footer><!-- end of footer -->
`;
document.getElementById("app-footer").innerHTML = appFooter;